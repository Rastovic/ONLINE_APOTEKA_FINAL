package com.online.apoteka_final.dto;

import java.util.Set;

import com.online.apoteka_final.entity.Customer;
import com.online.apoteka_final.entity.OrderItem;
import com.online.apoteka_final.entity.Order;

import lombok.Data;

@Data
public class Purchase {
    
    private Customer customer;
    private Order order;
    private Set<OrderItem> orderItems;
    
    





}
