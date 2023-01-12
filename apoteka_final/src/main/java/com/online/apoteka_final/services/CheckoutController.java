package com.online.apoteka_final.services;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.online.apoteka_final.dto.Purchase;
import com.online.apoteka_final.dto.PurchaseResponse;

import javax.mail.MessagingException;
import java.io.IOException;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("api/checkout")
public class CheckoutController {

    private CheckoutService checkoutService;

    public CheckoutController(CheckoutService checkoutService){
        this.checkoutService = checkoutService;
    }
    
    @PostMapping("/purchase")
    public PurchaseResponse placeOrder(@RequestBody Purchase purchase) throws MessagingException, IOException {
            PurchaseResponse purchaseResponse = checkoutService.placeOrder(purchase);
            return purchaseResponse;
    }     
    
}
