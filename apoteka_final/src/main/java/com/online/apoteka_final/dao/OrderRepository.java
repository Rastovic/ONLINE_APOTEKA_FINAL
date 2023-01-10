package com.online.apoteka_final.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.online.apoteka_final.entity.Order;
@RepositoryRestResource(collectionResourceRel = "orderr",path = "order")
@CrossOrigin("http://localhost:4200")
public interface OrderRepository extends JpaRepository<Order, Long> {

}
