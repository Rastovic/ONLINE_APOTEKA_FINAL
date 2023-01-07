package com.online.apoteka_final.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.online.apoteka_final.entity.Product;
@CrossOrigin("http://localhost:4200/")
@RepositoryRestResource(collectionResourceRel = "products",path = "products")
public interface ProductRepository extends JpaRepository<Product, Integer> {

    Page<Product> findByProductNameContaining(@Param("productName") String productName, Pageable pageable);


}
