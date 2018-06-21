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
@endsection

@section('content')
    @include('components.banner')
    @include('components.concept')
    @include('components.regis')
    @include('components.highlight')
    @include('components.innovation')
    @include('components.plan')
    @include('components.video')
    @include('components.gallery')
@endsection

@section('custom_script')
    <script src="{{ asset('/js/plan.js') }}"></script>
    <script src="{{ asset('/js/gallery.js') }}"></script>
@endsection