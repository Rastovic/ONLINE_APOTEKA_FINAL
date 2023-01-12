package com.online.apoteka_final.services;

import com.online.apoteka_final.dto.Purchase;
import com.online.apoteka_final.dto.PurchaseResponse;

import javax.mail.MessagingException;
import java.io.IOException;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase) throws MessagingException, IOException;
    
}
