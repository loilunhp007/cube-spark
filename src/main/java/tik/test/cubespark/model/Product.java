package tik.test.cubespark.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;

import com.google.gson.JsonElement;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
public class Product {
	private String id;
	private String name;
	private String price;
	List<Dataset> dataset = new ArrayList<Dataset>();
	public Product(String id, String name, String price) {
		super();
		this.id = id;
		this.name = name;
		this.price = price;
	}
	
}