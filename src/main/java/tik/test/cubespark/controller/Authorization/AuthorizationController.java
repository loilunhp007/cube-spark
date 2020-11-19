package tik.test.cubespark.controller.Authorization;

import java.awt.Image;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.slf4j.*;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.lazada.lazop.api.LazopClient;

import ch.qos.logback.core.Context;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import tik.test.cubespark.model.ModelProduct;
import tik.test.cubespark.repository.Product.SkuRepository;
import tik.test.cubespark.service.AccessToken;
import tik.test.cubespark.service.SkuService;
import tik.test.cubespark.service.ProductService.ProductService;

@RestController
@RequestMapping("/auth")
public class AuthorizationController {
	//private final Logger log = LoggerFactory.getLogger(AuthorizationController.class);
	AccessToken accessToken = new AccessToken();
	
	@RequestMapping(method = RequestMethod.GET, value = "/code")
	public String getCode(@RequestParam String code) throws Exception {
		System.out.println("code \t" + code);
		accessToken.getAccessToken(code);
		return null;
	}
	
	@RequestMapping(value = "testSkuTable", method = RequestMethod.GET)
	public String getSku() {
		SkuService skuService = new SkuService();
		return null;
	}
	
	@RequestMapping(value = "/getProducts", method = RequestMethod.GET)
	public ResponseEntity<String> getProducts() {
		ProductService productSer = new ProductService(); //Product service chua code logic business
		GsonBuilder builder = new GsonBuilder();
		builder.setPrettyPrinting().serializeNulls();
		builder.serializeNulls();
		Gson gson = builder.create();
		JsonParser parser = new JsonParser();
		JsonObject jObject = parser.parse(productSer.getProducts()).getAsJsonObject();
		JsonObject data = (JsonObject) jObject.get("data");
		JsonArray jArray = data.get("products").getAsJsonArray();
		
		ModelProduct product = gson.fromJson(jArray.get(0), ModelProduct.class); //Object chua product
		//System.out.println(product);
		//JsonArray arr = jObject.get("quantity").getAsJsonArray();
		//System.out.println(arr.get(0) + "\n" + arr.get(1));
		ResponseEntity<String> res = new ResponseEntity<String>( "{}" ,HttpStatus.OK);
		CorsRegistry cors = new CorsRegistry();
		cors.addMapping("*").allowedHeaders("*").allowedOrigins("*").allowedMethods("*");
		return new ResponseEntity<String>( "{\"name\": "+product.getPrimary_category()+"}" ,HttpStatus.OK);
	}
}