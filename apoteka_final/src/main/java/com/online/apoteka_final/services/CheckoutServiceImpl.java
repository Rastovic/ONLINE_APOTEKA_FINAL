package com.online.apoteka_final.services;

import java.io.IOException;
import java.util.Set;
import java.util.UUID;

import javax.mail.MessagingException;
import javax.transaction.Transactional;


import com.online.apoteka_final.dao.OrderRepository;
import com.online.apoteka_final.helpers.EmailDetails;
import org.springframework.beans.factory.annotation.Autowired;
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
    private MailService mailService;
    @Autowired
    private OrderRepository orderRepository;

    
    public CheckoutServiceImpl(CustomerRepository customerRepository, MailService mailService){
        this.customerRepository = customerRepository;
        this.mailService = mailService;
    }

    
    @Override
    @Transactional
    public PurchaseResponse placeOrder(Purchase purchase) throws MessagingException, IOException {

        Order order = purchase.getOrder();

        String orderTrackingNumber = generateOrderTrackingNumber();
        order.setOrderTrackingNumber(orderTrackingNumber);

        Set<OrderItem> orderItems = purchase.getOrderItems();
        orderItems.forEach(item -> order.add(item));

        Customer customer = purchase.getCustomer();
        customer.add(order);

        customerRepository.save(customer);



        mailService.sendSimpleMail(new EmailDetails(customer.getEmail(), customer.getFirstName(), customer.getEmail()));

        return new PurchaseResponse(orderTrackingNumber);
    }
    
    private String generateOrderTrackingNumber() {

        return UUID.randomUUID().toString();
    }

}

