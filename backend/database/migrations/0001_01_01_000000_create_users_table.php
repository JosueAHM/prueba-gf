<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('identificacion')->unique(); 
            $table->string('username')->unique();       
            $table->string('apellidos');                
            $table->string('nombres');                  
            $table->date('fecha_nacimiento');           
            $table->string('celular');                  
            $table->string('telefono')->nullable();     
            $table->string('correo_personal')->unique();
            $table->string('estado_civil');             
            $table->string('sexo');                     
            $table->text('direccion');                  
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};