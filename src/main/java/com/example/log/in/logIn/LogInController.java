package com.example.log.in.logIn;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class LogInController {

    @Autowired
    private LogInService logInService;

    @GetMapping("/login")
    public List<LogIn> findAllLogIns(){
        return logInService.findAllLogIns();
    }

//    @GetMapping("/login/${id}")
//    public Optional<LogIn> findALogIn(@PathVariable String id){
//        return logInService.findALogIn(id);
//    }

    @PostMapping("/login")
    public void addLogIn(@RequestBody LogIn logIn){
        logInService.addLogIn(logIn);
    }

    @DeleteMapping("/login/${id}")
    public void deleteLogIn(@PathVariable String id){
        logInService.deleteLogIn(id);
    }
}
