package com.online.apoteka_final.entity;




import javax.persistence.CascadeType;
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
@Table(name="address")
@Data
public class Address {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "address_id")
	private int address_id;

	@Column(name = "town")
	private String town;

	@Column(name = "country")
	private String country;

	@Column(name = "zip_code")
	private Long zip_code;

	@Column(name = "street_name")
	private String street_name;

	@Column(name = "street_number")
	private String street_number;

	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="address_id", nullable=false)
	private Pharmacy pharmacy;
}
