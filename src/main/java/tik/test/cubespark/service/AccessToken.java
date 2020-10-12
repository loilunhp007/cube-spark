package tik.test.cubespark.service;

import com.lazada.lazop.api.LazopClient;
import com.lazada.lazop.api.LazopRequest;
import com.lazada.lazop.api.LazopResponse;
import com.lazada.lazop.util.ApiException;
import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;

public class AccessToken {/*
							 * private String accessToken; private String refreshToken; private int
							 * expiresIn; private String refreshExpiresIn; private String accountId; private
							 * String account;
							 */
	public AccessToken() {

	}

	public String getAccessToken(String code) {
		LazopClient client = new LazopClient("https://auth.lazada.com/rest", "122973","Yw6g8EvzqBQSF628Q5ZwcC2uNiI60ZSS");
		LazopRequest request = new LazopRequest("/auth/token/create");
		request.addApiParameter("code", code);
		LazopResponse response;
		try {
			response = client.execute(request);
			System.out.println(response.getBody());

			JsonObject jObject = JsonParser.parseString(response.getBody()).getAsJsonObject();
			System.out.println("response body:\n" + jObject.get("access_token"));
			Thread.sleep(30);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
}
