package com.online.apoteka_final.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.online.apoteka_final.entity.Address;

@CrossOrigin("http://localhost:4200")
public interface AddressRepository extends JpaRepository<Address, Integer> {

}
