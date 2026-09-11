package com.example.apag_ph_be.service;

import com.example.apag_ph_be.dto.request.LoginRequest;
import com.example.apag_ph_be.dto.response.AuthResponse;
import com.example.apag_ph_be.dto.response.UserResponse;

public interface AuthService {
    AuthResponse login(LoginRequest request);
    UserResponse getCurrentUser();
}
