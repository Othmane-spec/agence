<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Créez un administrateur
        User::create([
            'name' => 'Admin Name',
            'email' => 'admin@agency.com',
            'password' => Hash::make('admin_123')
        ]);
    }
}
