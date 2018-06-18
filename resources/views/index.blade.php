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
@endsection

@section('content')
    @include('components.banner')
    @include('components.concept')
    @include('components.regis')
    @include('components.highlight')
    @include('components.innovation')
@endsection

@section('custom_script')

@endsection