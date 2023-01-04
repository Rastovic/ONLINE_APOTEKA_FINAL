package com.online.apoteka_final.entity;




import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="address")
@Data
public class Address {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="address_id")
	private int address_id;
	
	@Column(name="town")
	private String town;
	
	@Column(name="country")
	private String country;
	
	@Column(name="zip_code")
	private Long zip_code;
	
	@Column(name="street_name")
	private String street_name;
	
	@Column(name="street_number")
	private String street_number;
	
	
}
