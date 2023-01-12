package com.online.apoteka_final;

import com.online.apoteka_final.helpers.EmailDetails;
import com.online.apoteka_final.services.MailService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class ApotekaFinalApplicationTests {

	@Autowired
	private MailService mailService;
	@Test
	void contextLoads() {
	}


}
