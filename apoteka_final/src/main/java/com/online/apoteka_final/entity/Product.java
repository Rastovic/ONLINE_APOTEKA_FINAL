package com.online.apoteka_final.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name="product")
@Data
public class Product {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="product_id")
	private int product_id;
	
	@Column(name = "image_url")
    private String image_url;

	
	@Column(name="product_name")
	private String product_name;
	
	@Column(name="product_description")
	private String product_description;
	
	@Column(name="price")
	private float price;
	
	
	@Column(name="availability")
	private boolean availability;
	
	@Column(name="prescription")
	private boolean prescription;
	
	@OneToOne
	@JoinColumn(name = "supplier_id", nullable = false)
	private Supplier supplier;
	
	@Column(name="pharmacy_id")
	private int pharmacy_id;
	
	
	
	
	
}

