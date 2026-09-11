package com.example.apag_ph_be.controller;

import com.example.apag_ph_be.dto.request.LoginRequest;
import com.example.apag_ph_be.dto.response.ApiResponse;
import com.example.apag_ph_be.dto.response.AuthResponse;
import com.example.apag_ph_be.dto.response.UserResponse;
import com.example.apag_ph_be.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<ApiResponse<AuthResponse>> login(@Valid @RequestBody LoginRequest request) {
        AuthResponse response = authService.login(request);
        return ResponseEntity.ok(ApiResponse.success(response, "Đăng nhập thành công"));
    }

    @GetMapping("/me")
    public ResponseEntity<ApiResponse<UserResponse>> getCurrentUser() {
        UserResponse user = authService.getCurrentUser();
        return ResponseEntity.ok(ApiResponse.success(user, "Lấy thông tin tài khoản thành công"));
    }
}
