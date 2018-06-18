@extends('layouts.default')

@section('title')
    Sansiri Oka
@endsection

@section('custom_head')
    <link rel="stylesheet" href="{{ asset('/css/banner.css') }}">
    <link rel="stylesheet" href="{{ asset('/css/concept.css') }}">
    <link rel="stylesheet" href="{{ asset('/css/regis.css') }}">
@endsection

@section('content')
    @include('components.banner')
    @include('components.concept')
    @include('components.regis')
@endsection

@section('custom_script')

@endsection