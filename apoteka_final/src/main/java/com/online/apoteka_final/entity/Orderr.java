package com.online.apoteka_final.entity;
import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
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

	
	
	
}
