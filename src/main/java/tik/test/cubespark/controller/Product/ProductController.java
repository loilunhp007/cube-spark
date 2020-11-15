package tik.test.cubespark.controller.Product;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/products")
public class ProductController {
	
	
	
	@RequestMapping(method = RequestMethod.GET, value="")
	public ResponseEntity<String> products(){
		//TODO: get all products
		return new ResponseEntity<String>("all products", HttpStatus.OK);
	}
	@RequestMapping(method = RequestMethod.GET, value="/get")
	public ResponseEntity<String> productsGet(
			@RequestParam(required = false) String filter,
			@RequestParam(required = false) String search,
			@RequestParam(required = false) String offset,
			@RequestParam(required = false) String limit,
			@RequestParam(required = false) String sku_seller_list
			){
		
		return new ResponseEntity<String>("{\"name\":\"Bitis\"}" ,HttpStatus.OK);
	}
}
