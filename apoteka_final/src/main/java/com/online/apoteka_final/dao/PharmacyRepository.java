package com.online.apoteka_final.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.online.apoteka_final.entity.Pharmacy;

@RepositoryRestResource(collectionResourceRel = "pharmacies",path = "pharmacies")
@CrossOrigin("http://localhost:4200")
public interface PharmacyRepository extends JpaRepository<Pharmacy, Integer> {

}
