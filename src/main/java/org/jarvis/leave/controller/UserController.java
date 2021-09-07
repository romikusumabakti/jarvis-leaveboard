package org.jarvis.leave.controller;

import org.jarvis.leave.model.LeaveAllowance;
import org.jarvis.leave.service.LeaveAllowanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserController {

    LeaveAllowanceService leaveAllowanceService;

    @Autowired
    public UserController(LeaveAllowanceService leaveAllowanceService) {
        this.leaveAllowanceService = leaveAllowanceService;
    }

    @GetMapping("/leave_allowances")
    private List<LeaveAllowance> getLeaveAllowances(Principal principal) {
        return leaveAllowanceService.findAll();
    }
}
