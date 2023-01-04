package com.online.apoteka_final.entity;


import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="pharmacy")
@Data
public class Pharmacy {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="pharmacy_id")
	private int pharmacy_id;
	
	
	
	@Column(name="pharmacy_name")
	private String pharmacy_name;
	
	@Column(name="working_hours")
	private String working_hours;
	
	@Column(name="user_name")
	private String user_name;
	
	@Column(name="user_password")
	private String user_password;
	
	
	
	
	
	

}
