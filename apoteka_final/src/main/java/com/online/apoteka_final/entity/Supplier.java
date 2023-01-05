package com.online.apoteka_final.entity;
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
