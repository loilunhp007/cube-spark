package tik.test.cubespark.model.Product;

import java.io.Serializable;
import java.math.BigDecimal;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="sku")
@Getter
@Setter
@Data
public class Sku implements Serializable{
	private static final long serialVersionUID = -297553281792804396L;
	
	@Id
	@Column(name = "ShopSku")
	private int shopSku;
	@Column(name="SellerSku")
	private String sellerSku;
	@Column(name="Available")
	private int available;
	@Column(name="Quantity")
	private int quantity;
	@Column(name="ColorFamily")
	private String colorFamily;
	@Column(name="Size")
	private String size;
	@Column(name="Height")
	private String height;
	@Column(name="Width")
	private String width;
	@Column(name="Length")
	private String length;
	@Column(name="Weight")
	private String weight;
	@Column(name="Price")
	private BigDecimal price;
	@Column(name="SpecialPrice")
	private BigDecimal specialPrice;
	@Column(name="SpecialFromTime")
	private Date specialFromTime;
	@Column(name="SpecialToTime")
	private Date specialToTime;
	@Column(name="Status")
	private String status;
}
