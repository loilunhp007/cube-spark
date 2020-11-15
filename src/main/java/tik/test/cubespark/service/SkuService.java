package tik.test.cubespark.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tik.test.cubespark.model.ModelSku;
import tik.test.cubespark.model.Product.Sku;
import tik.test.cubespark.repository.Product.SkuRepository;
@Service
public class SkuService {
	@Autowired
	SkuRepository skuRepository;
	ModelSku modelSku;
	
	
}
