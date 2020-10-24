package tik.test.cubespark.service;

import com.lazada.lazop.api.LazopClient;
import com.lazada.lazop.api.LazopRequest;
import com.lazada.lazop.api.LazopResponse;
import com.lazada.lazop.util.ApiException;

public class ProductService {

	public String getProducts() {
		LazopClient client = new LazopClient("https://api.lazada.vn/rest", "122973", "Yw6g8EvzqBQSF628Q5ZwcC2uNiI60ZSS");
		LazopRequest request = new LazopRequest("/products/get");
		request.setHttpMethod("GET");
		request.addApiParameter("filter", "inactive");
		request.addApiParameter("search", "");
		request.addApiParameter("offset", "0");
		request.addApiParameter("create_after", "2020-01-01T00:00:00+0800");
		request.addApiParameter("limit", "10");
		request.addApiParameter("options", "1");
		request.addApiParameter("sku_seller_list", " [\"bitisHunter-trangSize38\", \"bitisHunter-trangSize39\"]");
		LazopResponse response = new LazopResponse();
		try {
			response = client.execute(request, "50000701215pkkazhWHmuftShYb10d70185BP4nsYjnHKg1erwniyAowFe83NhNx");
			//System.out.println(response.getBody());
			
			Thread.sleep(10);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return response.getBody();
	}
}
