package com.online.apoteka_final.dao;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.online.apoteka_final.entity.Address;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "address",path = "address")
@CrossOrigin("http://localhost:4200")
public interface AddressRepository extends JpaRepository<Address, Integer> {
    Address findByPharmacyId(@Param("id") Integer id);

    @Query(value = "select * from Address address where address.address_id in(select MIN(address.address_id) from Address group by address.town) ", nativeQuery = true)
    List<Address> findAllDistinctTowns();
       
}
