package com.online.apoteka_final.entity;

import java.util.Date;
import java.util.List;

import javax.persistence.*;
import lombok.Data;

@Entity
@Table(name="product")
@Data
public class Product {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="product_id", nullable = false)
    private int id;

	
	@Column(name = "image_url")
    private String image_url;

	
	@Column(name="product_name")
	private String productName;
	
	@Column(name="product_description")
	private String product_description;
	
	@Column(name="price")
	private float price;
	
	@Column(name="prescription")
	private boolean prescription;

	@ManyToMany(fetch = FetchType.LAZY,cascade = {CascadeType.PERSIST,CascadeType.DETACH,CascadeType.REFRESH,CascadeType.MERGE})
	@JoinTable(name="pharmacy_product",
				joinColumns = @JoinColumn(name="product_id"),
				inverseJoinColumns = @JoinColumn(name="pharmacy_id"))
	private List <Pharmacy> pharmacy;
	
	
	
	
	
}

