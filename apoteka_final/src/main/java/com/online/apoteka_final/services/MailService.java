package com.online.apoteka_final.services;

import com.online.apoteka_final.helpers.EmailDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;
import org.springframework.mail.javamail.MimeMessageHelper;
import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

@Component
public class MailService {
    @Autowired
    private JavaMailSender javaMailSender;
  

    public void sendSimpleMail(EmailDetails details) throws MessagingException, IOException
    {
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, "utf-8");
        helper.setText(readContent(), true);
        helper.setFrom("apoteka.online.cg@gmail.com");
        helper.setTo(details.getRecipient());

        helper.setSubject(details.getSubject());

        javaMailSender.send(mimeMessage);

    }

    private String readContent() throws IOException {

        String absPath = System.getProperty("user-dir");
        var path = Paths.get(absPath + "/apoteka_final/src/main/java/com/online/apoteka_final/services/mailBody.html");

        return new String(Files.readAllBytes(path));
    }
}
