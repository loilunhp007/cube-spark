package tik.test.cubespark.model;

import java.util.ArrayList;
import java.util.List;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@ToString
public class ModelProduct {
	public int item_id;
	public int primary_category;
	public List<ModelSku> skus = new ArrayList<ModelSku>();
	ModelAttributes attributes;
	public ModelProduct() {
	}

	
}
