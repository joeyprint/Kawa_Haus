@extends('layouts.default')

@section('title')
    Sansiri Oka
@endsection

@section('custom_head')
    <link rel="stylesheet" href="{{ asset('/css/banner.css') }}">
    <link rel="stylesheet" href="{{ asset('/css/concept.css') }}">
    <link rel="stylesheet" href="{{ asset('/css/regis.css') }}">
    <link rel="stylesheet" href="{{ asset('/css/highlight.css') }}">
    <link rel="stylesheet" href="{{ asset('/css/innovation.css') }}">
    <link rel="stylesheet" href="{{ asset('/css/plan.css') }}">
    <link rel="stylesheet" href="{{ asset('/css/video.css') }}">
    <link rel="stylesheet" href="{{ asset('/css/gallery.css') }}">
    <link rel="stylesheet" href="{{ asset('/css/contact.css') }}">
@endsection

@section('content')
    @include('components.banner')
    @include('components.concept')
    @include('components.regis')
    @include('components.testhighlight')
    @include('components.innovation')
    @include('components.plan')
    @include('components.video')
    @include('components.gallery')
    @include('components.contact')
@endsection

@section('custom_script')
    <script src="{{ asset('/js/plan.js') }}"></script>
    <script src="{{ asset('/js/gallery.js') }}"></script>
    <script src="{{ asset('/js/highlight.js') }}"></script>
    <script>
        var map;
        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 13.714667, lng: 100.604528},
            zoom: 8
            });
        }
    </script>
    <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" async defer></script>
@endsection