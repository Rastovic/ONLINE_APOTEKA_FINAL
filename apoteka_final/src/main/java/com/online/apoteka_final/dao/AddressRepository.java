package com.online.apoteka_final.dao;

import java.util.List;
import java.util.Optional;

import org.hibernate.criterion.Order;
import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.online.apoteka_final.entity.Address;
@RepositoryRestResource(collectionResourceRel = "address",path = "address")
@CrossOrigin("http://localhost:4200")
public interface AddressRepository extends JpaRepository<Address, Integer> {
    Address findByPharmacyId(@Param("id") Integer id);
       
}
