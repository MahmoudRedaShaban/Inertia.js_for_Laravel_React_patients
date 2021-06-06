<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ __(config('app.name'))}}</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />

    <script src="{{ mix('/js/app.js') }}" defer></script>
</head>
<body>
    <div id="el">
        @routes
        @inertia
        <main class="py-4">
            @yield('content')
        </main>
    </div>

</body>
</html>
