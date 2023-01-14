package com.online.apoteka_final.entity;


import java.util.List;


import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="pharmacy")
@Data
public class Pharmacy {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="pharmacy_id")
	private int id;
	
	
	
	@Column(name="pharmacy_name")
	private String pharmacyname;
	
	@Column(name="working_hours")
	private String working_hours;

	@Column(name="image_url")
	private String image_url;

	@Column(name="mapa")
	private String mapa;

	
	@ManyToMany(fetch = FetchType.LAZY,cascade = {CascadeType.PERSIST,CascadeType.DETACH,CascadeType.REFRESH,CascadeType.MERGE})
	@JoinTable(name="pharmacy_product",
				joinColumns = @JoinColumn(name="pharmacy_id"),
				inverseJoinColumns = @JoinColumn(name="product_id"))
	private List<Product> product;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="address_id", nullable=false)
	private Address address;

	
	
	
	

}
