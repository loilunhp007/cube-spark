package tik.test.cubespark.model;

import java.util.ArrayList;
import java.util.List;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class LazProduct {
	public int item_id;
	public int primary_category;
	public List<Sku> skus = new ArrayList<Sku>();
	LazAttributes attributes;
	public LazProduct() {
	}
	@Override
	public String toString() {
		return "LazProduct [item_id=" + item_id + ", primary_category=" + primary_category + ", skus=" + skus
				+ ", attributes=" + attributes + "]";
	}
	
}
