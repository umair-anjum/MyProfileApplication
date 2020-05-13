package com.example.business;

import android.content.Intent;
import android.os.Bundle;
import android.view.Window;
import android.view.WindowManager;
import android.widget.ImageView;

import androidx.appcompat.app.AppCompatActivity;

public class Splashscreen extends AppCompatActivity {
    private int sleep_timer = 3;
    ImageView imageView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        requestWindowFeature(Window.FEATURE_NO_TITLE);
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN);
        setContentView(R.layout.activity_splashscreen);
        getSupportActionBar().hide();
        imageView = findViewById(R.id.imgview);
        imageView.setImageResource(R.drawable.splash_pic);

        logolauncher logolauncher = new logolauncher();
        logolauncher.start();
    }

    private class logolauncher extends Thread {
        public void run() {
            try {
                sleep(1000 * sleep_timer);

            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            startActivity(new Intent(Splashscreen.this, MainActivity.class));
            Splashscreen.this.finish();
        }
    }

}
