package tik.test.cubespark.controller;

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

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.lazada.lazop.api.LazopClient;

import tik.test.cubespark.model.AlbumImages;
import tik.test.cubespark.model.Dataset;
import tik.test.cubespark.model.LazProduct;
import tik.test.cubespark.model.Product;
import tik.test.cubespark.service.AccessToken;
import tik.test.cubespark.service.ProductService;

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
	
	@RequestMapping(method = RequestMethod.GET, value = "/test")
	public ResponseEntity<String> test() {
		Product product = new Product("123","456","789") ;
		GsonBuilder builder = new GsonBuilder();
		builder.setPrettyPrinting().serializeNulls();
		builder.serializeNulls();
		Gson gson = builder.create();
		
		Dataset dataset = new Dataset();
		dataset.album_id="123";
		dataset.album_title="album 1";
		AlbumImages image = new AlbumImages();
		image.image_id = "1";
		
		Collection collection = new ArrayList();
		collection.add("hello");
		collection.add(6);
		collection.add(image);
		String json = gson.toJson(collection);
		System.out.println(json);
		JsonParser parser = new JsonParser();
		JsonArray jArray = parser.parse(json).getAsJsonArray();
		
		String mess = gson.fromJson(jArray.get(0), String.class);
		int number = gson.fromJson(jArray.get(1), int.class);
		AlbumImages image2 = gson.fromJson(jArray.get(2), AlbumImages.class);
		
		System.out.println(mess +"\n"+ number +"\n"+ image2);
		System.out.println(jArray.get(2).getAsJsonObject());
		
		//dataset.images.add(image);
		//product.getDataset().add(dataset);
		
		//System.out.println(gson.toJson(product));
		return ResponseEntity.ok(gson.toJson(product));
	}

	@RequestMapping(value = "/getProducts", method = RequestMethod.GET)
	public String getProducts() {
		ProductService productSer = new ProductService();
		GsonBuilder builder = new GsonBuilder();
		builder.setPrettyPrinting().serializeNulls();
		builder.serializeNulls();
		Gson gson = builder.create();
		JsonParser parser = new JsonParser();
		JsonObject jObject = parser.parse(productSer.getProducts()).getAsJsonObject();
		JsonObject data = (JsonObject) jObject.get("data");
		JsonArray jArray = data.get("products").getAsJsonArray();
		LazProduct pro = gson.fromJson(jArray.get(0), LazProduct.class);
		System.out.println(pro);
		//JsonArray arr = jObject.get("quantity").getAsJsonArray();
		//System.out.println(arr.get(0) + "\n" + arr.get(1));
		return null;
	}
}