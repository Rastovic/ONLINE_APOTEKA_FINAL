package com.online.apoteka_final.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.online.apoteka_final.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer,Integer>{
    
}
