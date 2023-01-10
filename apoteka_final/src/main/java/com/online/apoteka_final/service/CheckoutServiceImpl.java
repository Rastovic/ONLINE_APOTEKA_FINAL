package com.online.apoteka_final.service;

import java.util.Set;
import java.util.UUID;

import javax.transaction.Transactional;


import org.springframework.stereotype.Service;


import com.online.apoteka_final.dao.CustomerRepository;
import com.online.apoteka_final.dto.Purchase;
import com.online.apoteka_final.dto.PurchaseResponse;
import com.online.apoteka_final.entity.Customer;
import com.online.apoteka_final.entity.OrderItem;
import com.online.apoteka_final.entity.Order;

@Service
public class CheckoutServiceImpl implements CheckoutService{

    private CustomerRepository customerRepository;

    
    public CheckoutServiceImpl(CustomerRepository customerRepository){
        this.customerRepository = customerRepository;
    }

    
    @Override
    @Transactional
    public PurchaseResponse placeOrder(Purchase purchase) {
         // retrieve the order info from dto
        Order order = purchase.getOrder();
        
        String orderTrackingNumber = generateOrderTrackingNumber();
        order.setOrderTrackingNumber(orderTrackingNumber);

        Set<OrderItem> orderItems = purchase.getOrderItems();
        orderItems.forEach(item -> order.add(item));

        Customer customer = purchase.getCustomer();
        customer.add(order);

        customerRepository.save(customer);

        return new PurchaseResponse(orderTrackingNumber);



      
    }
    
    private String generateOrderTrackingNumber() {

        // generate a random UUID number (UUID version-4)
        // For details see: https://en.wikipedia.org/wiki/Universally_unique_identifier
        //
        return UUID.randomUUID().toString();
    }
}

