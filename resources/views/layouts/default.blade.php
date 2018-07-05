<html>
    <head>
        <title>@yield('title')</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="{{ asset('/css/bootstrap.min.css') }}">
        <link rel="stylesheet" href="{{ asset('/css/owl.carousel.min.css') }}">
        <link rel="stylesheet" href="{{ asset('/css/owl.theme.default.min.css') }}">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css">
        <link rel="stylesheet" href="{{ asset('/css/aos.css') }}">
        <link rel="stylesheet" href="{{ asset('/css/animate.min.css') }}">
        
        <link rel="stylesheet" href="{{ asset('/css/index.css') }}">
        
        {{-- custom_head --}}
        @yield('custom_head')
    </head>

    <body>
        
        @include('utils.navbar')

        {{-- content --}}
        @yield('content')

        <script src="{{ asset('/js/jquery-3.3.1.min.js') }}"></script>
        <script src="{{ asset('/js/bootstrap.min.js') }}"></script>
        <script src="{{ asset('/js/fontawesome.min.js') }}"></script>
        <script src="{{ asset('/js/owl.carousel.js') }}"></script>
        <script src="{{ asset('/js/owl.animate.js') }}"></script>
        <script src="{{ asset('/js/aos.js') }}"></script>
        <script>
            var asset_url = "{{ asset('') }}";
            $(function(){
                AOS.init();
            });
            $(window).on('load',function(){
                AOS.refresh();
            });
        </script>
        <script src="{{ asset('/js/default-all.js') }}"></script>

        {{-- custom_script --}}
        @yield('custom_script')

        @include('utils.footer')
    </body>
</html>