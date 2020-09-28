package tik.test.cubespark.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TokenController {

	@RequestMapping(value = "/oauth/authorize", method = RequestMethod.GET)
	public String getCode(@RequestParam(name = "code") String code) {
		if(code==null)
			return null;
		System.out.println(code);
		return code;
	}
}
