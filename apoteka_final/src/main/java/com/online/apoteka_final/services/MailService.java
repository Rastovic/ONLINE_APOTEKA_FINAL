package com.online.apoteka_final.services;
import com.online.apoteka_final.helpers.EmailDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

@Component
public class MailService{
    @Autowired
    private JavaMailSender javaMailSender;
    public void sendSimpleMail(EmailDetails details)
    {
            SimpleMailMessage mailMessage = new SimpleMailMessage();

            mailMessage.setFrom("apoteka.online.cg@gmail.com");
            mailMessage.setTo(details.getRecipient());
            mailMessage.setText(details.getMsgBody());
            mailMessage.setSubject(details.getSubject());

            javaMailSender.send(mailMessage);

    }
}
