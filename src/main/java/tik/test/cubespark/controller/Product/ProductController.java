package tik.test.cubespark.controller.Product;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import tik.test.cubespark.service.ProductService.ProductService;

@Controller
@RequestMapping("/products")
public class ProductController {
	
	private ProductService productService = new ProductService();
	
	@RequestMapping(method = RequestMethod.GET, value="")
	public ResponseEntity<String> products(){
		//TODO: get all products
		return new ResponseEntity<String>("test", HttpStatus.OK);
	}
	@RequestMapping(method = RequestMethod.GET, value="/get")
	public ResponseEntity<String> productsGet(
			@RequestHeader("access_token") String access_token,
			@RequestParam(required = false) String filter,
			@RequestParam(required = false) String search,
			@RequestParam(required = false) String offset,
			@RequestParam(required = false) String limit,
			@RequestParam(required = false) String sku_seller_list
			){
		String responseJson = productService.getProducts(access_token, filter, search, offset,limit, sku_seller_list);
		
		return new ResponseEntity<String>(responseJson ,HttpStatus.OK);
	}
	
}
