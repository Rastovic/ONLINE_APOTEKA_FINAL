package com.online.apoteka_final.service;

import com.online.apoteka_final.dto.Purchase;
import com.online.apoteka_final.dto.PurchaseResponse;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);
    
}
