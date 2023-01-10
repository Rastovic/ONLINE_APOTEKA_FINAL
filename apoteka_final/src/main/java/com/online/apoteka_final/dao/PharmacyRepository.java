package com.online.apoteka_final.dao;

import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.online.apoteka_final.entity.Pharmacy;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "pharmacies",path = "pharmacies")
@CrossOrigin("http://localhost:4200")
public interface PharmacyRepository extends JpaRepository<Pharmacy, Integer> {

    List<Pharmacy> findAllByAddress_Town(@Param("town") String town);
    List<Pharmacy> findByProductId(@Param("id") Integer id);
}
