# MikroTik PPPoE Manager - Project Details

## Overview
MikroTik PPPoE Manager is a modern web application built with Next.js that provides a clean, intuitive interface for managing PPPoE users on MikroTik routers. This tool simplifies user management tasks like adding users, updating expiration dates, and batch processing expired accounts.

## Key Features

### User Management
- View all PPPoE users in a clean card-based UI
- Add new PPPoE users with custom profiles and expiration dates
- Enable/disable existing users with a single click
- Update user passwords and service profiles
- Search functionality for quickly finding specific users

### Expiration Management
- Set and update expiration dates for individual users
- Batch update expiration dates for multiple users at once
- Automatic processing of expired accounts
- Visual indicators for active vs. expired/disabled accounts

### Remote Access Integration
- Secure remote access using Cloudflare Tunnel technology
- Access your MikroTik router from anywhere without exposing it to the internet
- Built-in API proxy to avoid CORS issues
- Works with both local and remote connections

### Technical Implementation
- Built using Next.js app router for optimal performance
- React components with clean state management
- Modern UI using shadcn/ui components
- Responsive design for desktop and mobile use
- API integration with MikroTik's RouterOS API
- TypeScript for improved code quality and developer experience

## Development Challenges

### Cross-Origin Resource Sharing (CORS)
One of the most significant challenges was handling CORS issues when accessing the MikroTik API from a different domain. I implemented a server-side API proxy to route requests through Next.js API routes, eliminating CORS problems while maintaining security.

### Secure Remote Access
I wanted users to access their routers from anywhere without compromising security. I integrated Cloudflare Tunnel support, which creates an encrypted tunnel from the router to Cloudflare's edge network, enabling secure remote management without directly exposing the router to the internet.

### Batch Operations
Managing multiple users simultaneously required careful state management and API integration. I implemented a selection mode that allows administrators to select multiple users and apply expiration updates in batches, significantly improving efficiency for networks with many users.

## Technical Skills Demonstrated
- Next.js and React development
- API integration and proxy implementation
- State management in complex UI applications
- Network security implementation
- Responsive UI design
- TypeScript for type-safe code

## Future Enhancements
- Bandwidth monitoring and usage statistics
- User activity logs and connection history
- Integration with additional MikroTik services beyond PPPoE
- Multi-router management from a single interface
