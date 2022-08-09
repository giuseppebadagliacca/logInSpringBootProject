package com.example.log.in.logIn;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LogInService {

    @Autowired
    private LogInRepo logInRepo;
    public List<LogIn> findAllLogIns() {
        return logInRepo.findAll();
    }

    public void addLogIn(LogIn logIn) {
        logInRepo.save(logIn);
    }

    public void deleteLogIn(String id) {
        logInRepo.deleteById(id);
    }

//    public Optional<LogIn> findALogIn(String id) {
//        return logInRepo.findById(id);
//    }
}
