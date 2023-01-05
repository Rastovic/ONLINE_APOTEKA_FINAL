package com.online.apoteka_final.entity;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import lombok.Data;

@Entity
@Table(name="orderr")
@Data
public class Orderr {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="order_id")
	private int order_id;
	
	@Column(name="product_id")
	private int product_id;
	
	@Column(name="quantity")
	private Integer quantity;
	
	@Column(name="order_date")
	private Date order_date;
	
	@Column(name="total_price")
	private float total_price;
	
	@Column(name="payment")
	private boolean payment;
	
	
	@OneToOne
	@JoinColumn(name = "address_id", nullable = false)
	private Address address;
	
	@OneToOne
	@JoinColumn(name = "user_id", nullable = false)
	private User user;
	
	@OneToOne
	@JoinColumn(name = "pharmacy_id", nullable = false)
	private Pharmacy pharmacy;
	
	
	
}
