package com.online.apoteka_final.entity;
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
@Table(name="supplier")
@Data
public class Supplier {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="supplier_id")
	private int supplier_id;
	
	@Column(name="supplier_name")
	private String supplier_name;
	
	@OneToOne
	@JoinColumn(name="address_id", nullable=false)
	private Address address;
	

	
	

}
